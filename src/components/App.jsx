import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
//import data from '../../src/data.json';
import api from '../api/api'
//console.log('api:',api);

export default class App extends Component {

  state = {
    data: [],
    page: 1,
    totalPages: 4,
    search: '',
    isLoading: false,
    error: null,
  }

  handleSubmitForm = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const search = form.elements.search.value;
    //console.log('submit:', typeof(search));
    this.setState({ search, data: [], page: 1 })
  }

  getPhotos = async () => {
    //console.log('search:', this.state.search);
    //console.log('page:', this.state.page);
    const { search, page } = this.state;

    this.setState({ isLoading: true });
    
    try {
      const data = await api.fetchPhotos(search, page)    

      this.setState((prevState) => (
        {
          data: page === 1 ? data.hits : [...prevState.data, ...data.hits],
        }
      ));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  loadMore = evn => {

    this.setState(
      (prevState) => (
        { page: prevState.page + 1 }
      ),
    )  
  }

  async componentDidMount() {
    // this.setState({ isLoading: true });

    // try {
    //   const data = await api.fetchPhotos()
    //   this.setState({ data: data.hits });
    // } catch (error) {
    //   this.setState({ error });
    // } finally {
    //   this.setState({ isLoading: false });
    // }
  }

  async componentDidUpdate(prevProps, prevState) {

    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {

      this.getPhotos()

    }
  }

  render() {

    const { data, page, isLoading, totalPages } = this.state

    //onsole.log('page:', page);
    //console.log('totalPages:', totalPages);

    return (
      <main>
        <Searchbar handleSubmitForm={this.handleSubmitForm} />
        {isLoading ? <Loader /> : <ImageGallery data={data} />}
        {data?.length > 0 && page < totalPages && (<div className="LoadMore-wrap"><Button page={page} loadMore={this.loadMore} /></div>)}
      </main>
    )
  }

}

