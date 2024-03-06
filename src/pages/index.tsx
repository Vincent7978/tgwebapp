import yayJpg from '../assets/yay.jpg';
import {Button, NavBar, Swiper, SwiperRef, TabBar, Tabs} from "antd-mobile";
import styles from './index.less'
import {history, Outlet, useLocation} from "@@/exports";
import {FC, useRef, useState} from "react";
import {AppOutline, UserOutline} from "antd-mobile-icons";
import {Link} from "umi";
// import {Tabs} from "rmc-tabs";
// import { KeepAlive } from 'umi'
// <script></script>


const NavTab: FC = () => {
    // const history = useHistory()
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value: string) => {
        history.push(value)
    }

    const tabs = [
        {
            key: '/market',
            title: '首页',
            icon: <AppOutline />,
        },
        {
            key: '/me',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={setRouteActive}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}

const tabItems = [
    { key: 'fruits', title: '水果' },
    { key: 'vegetables', title: '蔬菜' },
    { key: 'animals', title: '动物' },
]

export default function HomePage() {
    const swiperRef = useRef<SwiperRef>(null)
    const [activeIndex, setActiveIndex] = useState(1)



  return (
      <div>
          <Tabs
              activeKey={tabItems[activeIndex].key}
              onChange={(key: string) => {
                  const index = tabItems.findIndex(item => item.key === key)
                  setActiveIndex(index)
                  swiperRef.current?.swipeTo(index)
              }}
          >
              {tabItems.map(item => (
                  <Tabs.Tab title={item.title} key={item.key} />
              ))}
          </Tabs>
          <Swiper
              direction='horizontal'
              loop
              indicator={() => null}
              ref={swiperRef}
              defaultIndex={activeIndex}
              onIndexChange={index => {
                  setActiveIndex(index)
              }}
          >
              <Swiper.Item>
                  <div className={styles.content}>菠萝</div>
              </Swiper.Item>
              <Swiper.Item>
                  <div className={styles.content}>西红柿</div>
              </Swiper.Item>
              <Swiper.Item>
                  <div className={styles.content}>蚂蚁</div>
              </Swiper.Item>
          </Swiper>
          {/*<div className={styles.body}>*/}
          {/*    <Link to="/market"></Link>*/}
          {/*    <Link to="/me"></Link>*/}
          {/*    <Outlet/>*/}
          {/*</div>*/}


          {/*<div className={styles.bottomNavTab}>*/}
          {/*    <NavTab/>*/}
          {/*    /!*<TabBar onChange={setRouteActive} activeKey={pathname}>*!/*/}
          {/*    /!*    <TabBar.Item key="/market" icon={<AppOutline/>} title="首页"/>*!/*/}
          {/*    /!*    <TabBar.Item key="/me" icon={<UserOutline/>} title="我的"/>*!/*/}
          {/*    /!*</TabBar>*!/*/}
          {/*</div>*/}
      </div>
  );
}
