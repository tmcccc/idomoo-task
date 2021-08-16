import React, {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {VideoUrlState} from "../../state/atom";
import styled from "styled-components";
import * as styles from './styles'
import * as helpers from './helpers'
import Loader from '../../commonComponents/Loader/Loader'
import {navigate} from "@reach/router";

const VideoPlay = ({className}) => {
    const links = useRecoilValue(VideoUrlState);
    const [videoReady, setVideoReady] = useState(false)

    useEffect(() => {
        const checkStatus = async () => {
            await helpers.checkStatus(links)
            setVideoReady(true)
        }
        if (!links)
            navigate('/')
        else {
            if (!videoReady)
                checkStatus()
            else {
                let player_options = {
                    src: links.url,
                    interactive: true,
                    size: "hd",
                    autoplay: true,
                };
                idmPlayerCreate(player_options, "idm_player");
            }
        }

    }, [videoReady])

    return <>
        {videoReady ? <div className={className} id="idm_player"/> : <Loader/>}

    </>
};

export default styled(VideoPlay)`${styles.Video}`;




