import {Outlet} from 'umi';
import styles from './index.less';
import {Helmet} from "@@/exports";
import {useEffect} from "react";

export default function Layout() {

    useEffect(() => {
        // @ts-ignore
        window.Telegram.WebApp.ready();
    })

    return (
        <div id="layout">
            <Helmet>
                <script src="https://telegram.org/js/telegram-web-app.js"/>
            </Helmet>
            <Outlet/>
        </div>
    );
}
