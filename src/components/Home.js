import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'
import Nav from '../components/Nav'
import Footer from './Footer'

class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(res => {

                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {


        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            
                            
                            <Link to={'/' + post.id}>
                                <span className="card-title"> {post.title}</span>
                                <div>
                                <p>Read More...</p>
                            </div>
                            </Link>
                            <p> {post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet</div>

            )
        return (
            <div>

            
            <div className="container">
            <div className="flexContainer">
                <div className="rightChild">
                {postList}
                </div>
                <div className="leftChild">
                <Nav/>
                </div>
            </div>
            
    
           
        </div>
        <Footer/>
        </div>

        )
    }
}






export default Home