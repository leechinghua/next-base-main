import Image from 'next/image'
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
import bookmarkIcon from '@/assets/bookmark.svg'

export default function FavIcon({
  isbn = '',
  fav = '',
  handleToggleFav = () => {},
}) {
  return (
    <>
      <Image
        onClick={() => {
          handleToggleFav(isbn)
        }}
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
      />
    </>
  )
}
