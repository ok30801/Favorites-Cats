import Layout from '../../hoc'
import {useDispatch} from 'react-redux'
import {Favorite, FavoriteBorder} from '@mui/icons-material'
import {Checkbox} from '@mui/material'
import './style.scss'

const Gallery = ({data, action, type}) => {

    const dispatch = useDispatch()

    return (
        <Layout>
            <div className="Gallery">
                <div className="Gallery__container">
                    {
                        data.map(item => (
                            <div key={item.id} className="Gallery__photo">
                                <img src={item.url} alt={item.id}/>
                                <div className="Gallery__favoriteIcon" onClick={() => dispatch(action(item))}>
                                    {
                                        type === 'allCats'
                                            ? <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
                                            : <Checkbox icon={<Favorite/>}/>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
export default Gallery
