import React, {useEffect, useState} from "react";
import {useSetRecoilState} from "recoil";
import {VideoUrlState} from "../../state/atom";
import * as constants from "./constants.js";
import * as styles from "./styles";
import * as helpers from "./helpers";
import styled from "styled-components";
import RequiredFields from "./components/RequiredFields.jsx";
import Form from "../../commonComponents/Form/Form.jsx";
import InputText from "../../commonComponents/Form/components/InputText/InputText.jsx";
import {navigate} from "@reach/router";
import Loader from "../../commonComponents/Loader/Loader";
import Error from "../../commonComponents/Error/Error";

const StoryBoardForm = ({className}) => {
    const setVideoUrl = useSetRecoilState(VideoUrlState);
    const [storyboardData, setStoryboardData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getFormElements() {
            try {
                const data = await helpers.getStoryBoardElemnts();
                await setStoryboardData(data);
            } catch (e) {
                setError(true)
            }
        }

        getFormElements();
    }, []);

    return (
        <>
            {error ? <Error/> :
                <div className={className}>
                    {storyboardData.length === 0 ? (
                        <Loader
                            color={'#f79999'}/>
                    ) : (
                        <>
                            <div className='title'>  {storyboardData.name}</div>
                            <Form
                                className="story-board-form"
                                initialValues={{
                                    ...helpers.initialDaynemicFields(storyboardData.data),
                                    ...helpers.initialRequestFields(constants.REQUIRED_FIELDS)
                                }}
                                validate={helpers.validate}
                                onSubmit={async (values) => {
                                    try {
                                        const links = await helpers.onSubmit(values);
                                        setVideoUrl(links);
                                        await navigate("/watch");
                                    } catch (e) {
                                        setError(true)
                                    }
                                }}
                            >
                                {storyboardData.data.map(({key, val}) => (
                                    <InputText {...helpers.FieldCreator(key, "text")} key={key}/>
                                ))}
                                <RequiredFields requiredFields={constants.REQUIRED_FIELDS}/>
                            </Form>
                        </>
                    )}
                </div>}
        </>
    );
};

export default styled(StoryBoardForm)`
  ${styles.Form}
`;


