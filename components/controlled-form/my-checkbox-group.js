import { useState } from 'react'

export default function MyCheckboxGroup() {
  // 選項按鈕群組(radio-button-group)
  const petOptions = ['狗', '貓', '倉鼠']

  // 核取方塊群組(checkbox-group) - 物件陣列
  // 建立一個物件陣列，整個作為狀態，其中有一個布林值代表是否被選中
  const initState = petOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false }
  })

  // 宣告物件陣列狀態
  const [myPets, setMyPets] = useState(initState)

  // 處理checked切換布林的函式
  const handleToggleChecked = (petId) => {
    const nextMyPets = myPets.map((v, i) => {
      // 如果符合(id是傳入的petId)，切換(反相)其中屬性checked的布林值物件
      if (v.id === petId) return { ...v, checked: !v.checked }
      // 否則回傳原本物件
      else return v
    })

    setMyPets(nextMyPets)
  }

  const handleToggleCheckedAll = (e) => {
    // 觸發事件時，強制讓所有選項的checked屬性，和全選的e.target.checked一致
    const nextMyPets = myPets.map((v, i) => {
      return { ...v, checked: e.target.checked }
    })

    setMyPets(nextMyPets)
  }

  // 核取方塊群組(checkbox-group) - 字串陣列
  // 宣告字串陣列狀態
  const [pets, setPets] = useState(['狗', '貓'])

  // 處理核取方塊事件的函式
  const handleCheckboxGroup = (e) => {
    // 宣告方便接下來使用的變數名稱，取得觸發事件的目標對象值
    const tv = e.target.value

    // 判斷目前是否有在pets字串陣列裡
    if (pets.includes(tv)) {
      // 如果有 ===> 移出陣列
      const nextPets = pets.filter((v) => v !== tv)
      setPets(nextPets)
    } else {
      // 否則 ===> 加入陣列
      const nextPets = [...pets, tv]
      setPets(nextPets)
    }
  }

  const handleCheckboxGroupAll = (e) => {
    if (e.target.checked) {
      setPets(petOptions)
    } else {
      setPets([])
    }
  }
  return (
    <>
      <div title="checkbox-group">
        <h2>核取方塊群組(checkbox-group)-物件陣列</h2>
        <div>
          <input
            type="checkbox"
            onChange={handleToggleCheckedAll}
            // 要連動所有項目是否有勾選(或取消勾選)要設定這個值
            // every會測試陣列中每個成員，都能通過提供的回調函式時，才會回傳true
            checked={myPets.every((v) => v.checked)}
          />
          全選
        </div>
        {myPets.map((v, i) => {
          return (
            <label key={v.id}>
              <input
                type="checkbox"
                checked={v.checked}
                onChange={() => {
                  handleToggleChecked(v.id)
                }}
              />
              {v.label}
            </label>
          )
        })}
        <h2>核取方塊群組(checkbox-group)-字串陣列</h2>
        <div>
          <input
            type="checkbox"
            onChange={handleCheckboxGroupAll}
            // 要連動所有項目是否有勾選(或取消勾選)要設定這個值
            // every會測試陣列中每個成員，都能通過提供的回調函式時，才會回傳true
            checked={petOptions.every((v) => pets.includes(v))}
          />
          全選
        </div>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                // 需要設定value值，事件觸發時是用這個value屬性
                value={v}
                checked={pets.includes(v)}
                onChange={handleCheckboxGroup}
              />
              {v}
            </label>
          )
        })}
      </div>
    </>
  )
}
