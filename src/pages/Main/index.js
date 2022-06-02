import Layout from '../../hoc'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {setFavoritesCatsAC} from '../../store/actions/actions'
import Gallery from '../../components/Gallery'
import Loader from '../../components/Loader'
import './style.scss'

const Main = () => {
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
            {
                !cats.length ? <Loader/> : <Gallery data={cats} action={setFavoritesCatsAC} type={'allCats'}/>
            }
        </Layout>
    )
}
export default Main
