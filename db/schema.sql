-- Create Users table
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Series table
CREATE TABLE Series (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    total_episodes INTEGER NOT NULL,
    release_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Episodes table
CREATE TABLE Episodes (
    id SERIAL PRIMARY KEY,
    series_id INTEGER NOT NULL REFERENCES Series(id) ON DELETE CASCADE,
    season_number INTEGER NOT NULL,
    episode_number INTEGER NOT NULL,
    title VARCHAR(255),
    air_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create UserSeries table
CREATE TABLE UserSeries (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    series_id INTEGER NOT NULL REFERENCES Series(id) ON DELETE CASCADE,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create UserShuffledEpisodes table
CREATE TABLE UserShuffledEpisodes (
    id SERIAL PRIMARY KEY,
    user_series_id INTEGER NOT NULL REFERENCES UserSeries(id) ON DELETE CASCADE,
    episode_id INTEGER NOT NULL REFERENCES Episodes(id) ON DELETE CASCADE,
    position INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_series_id, position)
);

-- Create UserSeriesIndex table
CREATE TABLE UserSeriesIndex (
    id SERIAL PRIMARY KEY,
    user_series_id INTEGER NOT NULL REFERENCES UserSeries(id) ON DELETE CASCADE,
    current_position INTEGER NOT NULL,
    user_shuffled_episode_id INTEGER NOT NULL REFERENCES UserShuffledEpisodes(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create WatchHistory table
CREATE TABLE WatchHistory (
    id SERIAL PRIMARY KEY,
    user_series_id INTEGER NOT NULL REFERENCES UserSeries(id) ON DELETE CASCADE,
    episode_id INTEGER NOT NULL REFERENCES Episodes(id) ON DELETE CASCADE,
    watched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_skipped BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);