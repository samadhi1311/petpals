import LogoOutline from '../../assets/LogoOutline.svg'
import './Loader.css'

export default function Loader() {

    return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

            <img src={LogoOutline} alt="loader" className='logo-outline' />

        </section>
    )
}