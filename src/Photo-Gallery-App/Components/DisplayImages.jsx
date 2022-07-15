import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {fetchGalleryData} from '../redux/features/gallerySlice';

export const DisplayImages = () => {
    const galleryState = useSelector((state) => {
        return state.galleryList.galleryData;
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGalleryData())
    }, [dispatch])

    return(
        <>
            <div className="container">
                <div className="row">
                    {
                        galleryState.map((photo) => {
                            const {
                                id,
                                author,
                                download_url
                            } = photo;
                            return (
                                <div className="col-lg-3 mx-auto my-2" key={id}>
                                    <img 
                                        src={download_url} 
                                        alt={author}
                                        className='img-fluid img-thumbnail'
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}