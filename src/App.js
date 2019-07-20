import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { paginate } from './utils/paginate';
import Pagination from './pagination';


class App extends Component{
  apiEndpoint = 'http://127.0.0.1:8000/posts/'
  constructor(){
    super()
    this.state = {
        posts: [],
        currentPage: 1,
        pageSize: 3,
    }
  }
  componentDidMount() {
    fetch(this.apiEndpoint).then(res=> res.json()).then(
        (data) => {
          this.setState({
            posts: data
          })
        }
    ).catch(console.log)
  }


  pageChangeHandler = page =>{
        this.setState({
            currentPage: page
        })
    }

  render() {
      const count = this.state.posts.length
      const { posts:allposts, pageSize, currentPage } = this.state
      const posts = paginate(allposts, pageSize, currentPage)
    return(
        <div className='App'>
          <h1 className='text-center'>Posts</h1>
          { posts.map(post =>
              <div className="card" key={ post.id }>
                <div className="card-body">
                    <span>{ post.id }</span>
                  <h5 className="card-title">{ post.title }</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{ post.body }</h6>
                </div>
              </div>
          ) }

          <Pagination
                        itemCount = { count }
                        page={ pageSize }
                        currentPage = { currentPage }
                        onPageChange={ this.pageChangeHandler }
                    />

        </div>
    )
  }
}

export default App;
