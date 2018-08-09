import React from 'react';
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            username: "anon",
            category: "",
            isDisabled: true,
            votes: 0,
            dropDownOpen: false,
            id: "",
            buttonText: "Choose a category",


        }
    }

    addPost() {
        this.props.onAddPost(this.state);
        this.setState({
            quote: "",
            author: "",
            username: "anon",
            category: "",
            votes: 0,
            id: ""
        })
    }
    
    render() {
        return (

            <div className='container'>
                <h1 className="title"> Submit your own quote! </h1>

                <p> Enter Your Quote </p>
                <input type="text" className='form-control' value={this.state.quote} onChange={(event) => {this.setState({quote:event.target.value})}}id="submitQuote" />
                <p>Enter the Author</p>
                <input type="text" className='form-control' value={this.state.author} onChange={(event) => {this.setState({author:event.target.value})}} id="submitAuthor" />


                {(!this.props.isUser ? <p>Enter your Username<input type="text" className='form-control' value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }} id="submit" /></p> : null)}


                <div className="dropdown">
                    <button className="dropdown-toggle buttun btn btn-primary" type="button" data-toggle="dropdown">
                        <span className="caret"> </span>{this.state.buttonText}</button>
                    <ul id="drop-ul"className="dropdown-menu">
                        <li value={this.state.category} id="drop-item"nClick={(event) => { this.setState({ buttonText: "Motivational" }); this.setState({ category: "Motivational" }) }}><a id="drop-text"href="#"> Motivational</a></li>
                        <li className="divider"></li>
                        <li value={this.state.category}id="drop-item" onClick={(event) => {this.setState({buttonText:"Funny"}); this.setState({category:"Funny"})}}><a id="drop-text"href="#">Funny</a></li>
                        <li className="divider"></li>
                        <li value={this.state.category}id="drop-item" onClick={(event) => { this.setState({ buttonText: "Thought-provoking" }); this.setState({ category: "Thought-provoking" }) }}><a id="drop-text" href="#">Thought-Provoking</a></li>
                        <li className="divider"></li>
                        <li value={this.state.category} id="drop-item"onClick={(event) => { this.setState({ buttonText: "Books/Movies" }); this.setState({ category: "Books/movies" }) }}><a id="drop-text"href="#">Books/Movies</a></li>
                        <li className="divider"></li>
                    </ul>
                </div>
                <div>

                </div>



                <button className='btn btn-info buttun'  data-toggle="modal" id="submitButton" data-target="#submitModal" onClick={this.addPost.bind(this)}>Submit Your Quote
                                    </button>
                <div className="modal" id="submitModal" tabIndex="1" role="dialog" aria-labelledby="modalLable" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modelLabel"> Quote submitted to:
                                         {" " + this.state.buttonText}</h5>
                                <button className="btn btn-primary btn-success" data-dismiss="modal">

                                    Super!</button>


                            </div>


                        </div>


                    </div>

                </div >




            </div>
        )
    }
}

export default Input;