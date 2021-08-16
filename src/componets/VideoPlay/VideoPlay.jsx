import React, {useEffect, useState} from "react";
import {useRecoilValue} from "recoil";
import {VideoUrlState} from "../../state/atom";
import styled from "styled-components";
import * as styles from './styles'
import * as helpers from './helpers'
import Loader from '../../commonComponents/Loader/Loader'
import {navigate} from "@reach/router";
import * as constans from './constants'

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
            !videoReady ?
                checkStatus():
                 idmPlayerCreate(helpers.buildPlayerOptions(constans.PLAYER_OPTIONS,links.url), constans.IDM_PLAYER);
            
        }

    }, [videoReady])

    return <>
        {videoReady ? <div className={className} id={ constans.IDM_PLAYER}/> : <Loader/>}

    </>
};

export default styled(VideoPlay)`${styles.Video}`;




