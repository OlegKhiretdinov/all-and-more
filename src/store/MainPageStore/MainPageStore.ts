import { action, makeObservable, observable } from "mobx"

type TMainPage = "_lifeArea"

interface ILifeArea {
  id: number,
  name:string
}

const query = `query LifeArea {
  life_area {
    name
    id
  }
}`

class MainPageStore {
  private _lifeArea: ILifeArea[] = []

  constructor(){

    makeObservable<this, TMainPage>(this, {
      _lifeArea: observable,
      setLifeArea:action.bound,
    })
  }

  public setLifeArea(){
    fetch("https://electric-redfish-97.hasura.app/v1/graphql", {
      method: "POST",
      headers: {
        "content-type":"application/json",
      },
      body: JSON.stringify({query})
    }).then((response) => response.json()).then(data => {

      this._lifeArea = data.data.life_area
    })
  }

  public get lifeArea(){
    return this._lifeArea
  }
}

export default new MainPageStore()