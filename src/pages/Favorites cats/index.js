import Layout from '../../hoc'
import {useSelector} from 'react-redux'
import {removeFavoriteCatAC} from '../../store/actions/actions'
import Gallery from '../../components/Gallery'
import './style.scss'

const FavoritesCats = () => {

    const favoritesCats = useSelector(state => state.favoritesCats.favoritesCats)

    return (
        <Layout>
            <Gallery data={favoritesCats} action={removeFavoriteCatAC} type={'favoritesCats'}/>
        </Layout>
    )
}
export default FavoritesCats
