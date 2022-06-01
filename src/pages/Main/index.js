import Layout from '../../hoc'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Checkbox} from '@material-ui/core'
import {Favorite, FavoriteBorder} from '@mui/icons-material'
import {useDispatch} from 'react-redux'
import {setFavoritesCatsAC} from '../../store/actions/actions'
import './style.scss'

const Main = () => {
    const dispatch = useDispatch()
    const [cats, setCats] = useState([])

    useEffect(() => {
        async function loadData() {
            try {
                await axios.get('https://api.thecatapi.com/v1/images/search?limit=100')
                    .then(response => response).then(response => {
                        setCats(response.data)
                    })
            } catch (e) {
                console.log(e);
            }
        }
        loadData();
    }, []);

    return (
        <Layout>
            <div className="Main">
                <div className="Main__container">
                    {
                        cats.map(item => (
                            <div key={item.id} className="Main__photo">
                                <img src={item.url} alt={item.id}/>
                                <div className="Main__favoriteIcon" onClick={() => dispatch(setFavoritesCatsAC(item))}>
                                    <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}
export default Main
