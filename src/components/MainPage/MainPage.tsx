import { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
import MainPageStore from "../../store/MainPageStore/MainPageStore"

const MainPage: FC = () => {
  useEffect(() => {
    MainPageStore.setLifeArea()
  }, [])

  return (
  <Layout>
    <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>{MainPageStore.lifeArea.map(item => <h3 key={item.id}>{item.name}</h3>)}</Content>
        <Footer>Footer</Footer>
      </Layout>
  </Layout>)
}

export default observer(MainPage)