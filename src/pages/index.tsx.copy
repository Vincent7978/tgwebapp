import yayJpg from '../assets/yay.jpg';
import {Button, NavBar, Swiper, Toast} from "antd-mobile";
import styles from './index.less'
// <script></script>
export default function HomePage() {
    const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

    const items = colors.map((color, index) => (
        <Swiper.Item key={index}>
            <div
                className={styles.content}
                style={{ background: color }}
                onClick={() => {
                    Toast.show(`你点击了卡片 ${index + 1}`)
                }}
            >
                {index + 1}
            </div>
        </Swiper.Item>
    ))
  return (
    <div>
        <NavBar  back={null}>
            标题
        </NavBar>
        <Swiper
            loop
            autoplay
            onIndexChange={i => {
                console.log(i, 'onIndexChange1')
            }}
        >
            {items}
        </Swiper>
      <h2>Yay! Welcome to umi!</h2>
        <Button color='primary'>dd</Button>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
