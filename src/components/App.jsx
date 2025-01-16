import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
//import data from '../../src/data.json';
import api from '../api/api'
//console.log('api:',api);

export default function App() {

  // state = {
  //   data: [],
  //   page: 1,
  //   totalPages: 4,
  //   search: '',
  //   isLoading: false,
  //   error: null,
  // }

  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  //const [totalPages, setTotalPages] = useState(4)
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const totalPages = 4


  const handleSubmitForm = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const search = form.elements.search.value;
    //console.log('submit:', typeof(search));
    //this.setState({ search, data: [], page: 1 })
    setSearch(search)
    setData(data)
    setPage(1)
  }

  

  const loadMore = evn => {

    // this.setState(
    //   (prevState) => (
    //     { page: prevState.page + 1 }
    //   ),
    // ) 
    
    setPage((prevData)=>(
      prevData + 1
    ))
    //setPage(page + 1)
  }

  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   try {
  //     const data = await api.fetchPhotos()
  //     this.setState({ data: data.hits });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }

  useEffect(() =>{
    const fetchData = async () =>{

      setIsLoading(true)
      try {
        const data = await api.fetchPhotos()
        setData(data.hits);
      } catch (error) {
        setError( error );
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    //getPhotos()

  },[])



  // async componentDidUpdate(prevProps, prevState) {

  //   if (prevState.search !== this.state.search || prevState.page !== this.state.page) {

  //     this.getPhotos()

  //   }
  // }

  useEffect(()=> {
        
    const getPhotos = async () => {
  
      setIsLoading(true);
      
      try {
        const data = await api.fetchPhotos(search, page)  

        setData((prevData) =>
          page === 1 ? data.hits : [...prevData, ...data.hits]
        );
  
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
  
    }

    getPhotos()

  }, [search, page])


  return (
    <main>
      <Searchbar handleSubmitForm={handleSubmitForm} />
      {isLoading ? <Loader /> : <ImageGallery data={data} />}
      {data?.length > 0 && page < totalPages && (<div className="LoadMore-wrap"><Button page={page} loadMore={loadMore} /></div>)}
    </main>
  )

}

