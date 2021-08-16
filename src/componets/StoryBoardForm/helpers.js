import axios from "axios";
import {ACCOUNT, CREATE_VIDEO_URL, GET_ELEMNTS_URL, SECRET_KEY, STORYBOARED} from "./constants.js";

export const getStoryBoardElemnts = async () => {
    try {
        const res = await axios.get(GET_ELEMNTS_URL, {
            auth: {
                username: ACCOUNT,
                password: SECRET_KEY
            }

        });

        return res.data;
    } catch (e) {
        throw e
    }
};

export const initialDaynemicFields = (data) => {
    let initialValues = {};

    data.forEach(({key, val}) => {
        initialValues[key] = val;
    });

    return initialValues;
};


export const initialRequestFields = (requiredFields) => {
    let initialValues = {};
    Object.values(requiredFields).forEach((field) => {
        initialValues[field.name] = field.options[0].value;
    });
    return initialValues;
};

export const validate = (values) => {
    const errors = {}
    Object.keys(values).forEach(name => {
        if (!values[name])
            errors[name] = "reuird"
    })

    return errors;
}
export const FieldCreator = (name, type) => {
    let label = name + ":";
    return {
        label,
        name,
        id: name,
        type,
        placeholder: name
    };
};

const buildBody = ({quality, resolution, format, ...rest}) => {
    const data = Object.keys(rest).reduce(
        (total, current) => [...total, {key: current, val: rest[current]}],
        []
    );

    return {
        storyboard_id: STORYBOARED,
        output: {
            video: [
                {
                    video_type: format,
                    quality: quality,
                    height: resolution
                }
            ]
        },
        data
    }

};


export const onSubmit = async (values) => {
    try {
        const body = buildBody(values);
        const res = await axios.post(CREATE_VIDEO_URL, body, {
            auth: {
                username: ACCOUNT,
                password: SECRET_KEY
            }
        });

        return res.data.output.video[0].links

       
    } catch (e) {
        throw e
    }
};
