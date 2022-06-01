import Layout from '../../hoc'
import {useDispatch, useSelector} from 'react-redux'
import {removeFavoriteCatAC} from '../../store/actions/actions'
import {Favorite} from '@mui/icons-material'
import './style.scss'

const FavoritesCats = () => {

    const dispatch = useDispatch()
    const favoritesCats = useSelector(state => state.favoritesCats.favoritesCats)

    return (
        <Layout>
            <div className="Main">
                <div className="Main__container">
                    {
                        favoritesCats.map((item, index) => (
                            <div key={index} className="Main__photo">
                                <img src={item.url} alt={item.id}/>
                                <div className="Main__favoriteIcon">
                                    <Favorite onClick={() => dispatch(removeFavoriteCatAC(item.id))}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
export default FavoritesCats
