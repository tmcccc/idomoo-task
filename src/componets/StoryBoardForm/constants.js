export const SECRET_KEY =
    "PiKQ1xfuKC22c1c5c0061af12a240e092d93ec6a47gmckwQGhp6";
export const ACCOUNT = "3550";
export const STORYBOARED = 31193;
export const GET_ELEMNTS_URL =
    "https://usa-api.idomoo.com/api/v2/storyboards/31193";
export const CREATE_VIDEO_URL =
    "https://usa-api.idomoo.com/api/v2/storyboards/generate";

export const REQUIRED_FIELDS = {
    format: {
        label: "Format:",
        name: "format",
        options: [
            {value: "mp4", name: "mp4"},
            {value: "hls", name: "hls"}
        ]
    },
    resolution: {
        label: "Resolution:",
        name: "resolution",
        options: [
            {value: 512, name: "512x512"},
            {value: 1280, name: "1280x1280"},
            {value: 1920, name: "1920x1920"}
        ]
    },

    quality: {
        label: "Quality:",
        name: "quality",
        options: [
            {value: 26, name: "good"},
            {value: 10, name: " very good"},
            {value: 1, name: "best"}
        ]
    }
};
