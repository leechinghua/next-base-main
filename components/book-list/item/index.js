import FavIcon from './fav-icon'
// 細分屬性再傳入屬性值
// 比較直接傳入book物件的原因
// 1. 更容易閱讀，避免不必要的資訊傳遞(例如book物件中有其它這個子女元件不需要的屬性值)
// 2. 指定預設值比較容易撰寫
// 3. 更容易進行react屬性與re-render最佳化
// 更多參考: https://github.com/orgs/mfee-react/discussions/111

export default function Item({
  isbn = '',
  title = '',
  author = '',
  fav = false,
  handleToggleFav = () => {},
}) {
  return (
    <>
      <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <FavIcon handleToggleFav={handleToggleFav} fav={fav} isbn={isbn} />
        </td>
      </tr>
    </>
  )
}
