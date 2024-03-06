import { Link, Outlet } from 'umi';
import styles from './nav.less';
import {Helmet, history, KeepAlive, useLocation} from "@@/exports";
import {useEffect, useState} from "react";
import {NavBar, TabBar} from "antd-mobile";
import {AppOutline, UserOutline} from "antd-mobile-icons";
import {AliveScope} from "react-activation";

export default function Layout() {

    const [activeKey,setActiveKey] = useState("/market")

    const setRouteActive = (value: string) => {
        setActiveKey(value)
        history.push(value)
    }

    useEffect(()=>{
        // @ts-ignore
        window.Telegram.WebApp.ready();
        // history.push(activeKey)
    })

    // const location = useLocation()
    // const { pathname } = location

    // const setRouteActive = (value: string) => {
    //     history.push(value)
    // }

    return (
        <div className={styles.root}>
            <Helmet>
                <script src="https://telegram.org/js/telegram-web-app.js"/>
            </Helmet>
            <div className={styles.head}>
                <NavBar back={null}>
                    标题
                </NavBar>
            </div>

            <div className={styles.body}>
                {/*<AliveScope>*/}
                <Link to="/market"></Link>
                <Link to="/me"></Link>
                <Outlet/>
                {/*</AliveScope>*/}
            </div>


            <div className={styles.bottomNavTab}>

                <TabBar onChange={setRouteActive} activeKey={activeKey} defaultActiveKey="/market">
                    <TabBar.Item key="/market" icon={<AppOutline/>} title="首页"/>
                    <TabBar.Item key="/me" icon={<UserOutline/>} title="我的"/>
                </TabBar>
            </div>


        </div>

    );
}
