import './style.scss'

export default function Mobile() {
  return (
    <>
      <button className='btn_mobile'>
        <svg fill="var(--bg-blue)" viewBox="0 0 100 100" width="45">
            <rect width="80" height="10" x="10" y="25" rx="5"></rect>
            <rect width="80" height="10" x="10" y="45" rx="5"></rect>
            <rect width="80" height="10" x="10" y="65" rx="5"> </rect>
        </svg>
        <span className='sr_reader'>Menu</span>
      </button>
    </>
  )
}
