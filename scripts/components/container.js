import React from 'react';
import Funny from './funny';
import Motivation from './motivation';
import Books from './books';
import Thought from './thought';
import Input from './input';
import Home from './home';
import { scaleRotate as Menu } from 'react-burger-menu'

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeVisible: true,
            booksVisible: false,
            funnyVisible: false,
            thoughtVisible: false,
            motivationVisible: false,
            userSubmitVisible: false,
            hasInitialized: true,
            usernameInput: "",
            passwordInput: "",
            globalUser: "Sign in",
            hasAttemptedSignin: false,
            isUser: false,
            hasVoted: 0,
            allPosts: [],
            userData: []
        }
    }
    componentSwitcher(boolean) {

        this.setState({
            homeVisible: false,
            booksVisible: false,
            funnyVisible: false,
            thoughtVisible: false,
            motivationVisible: false,
            userSubmitVisible: false
        })
        this.setState((prevState) => {

            return {
                [boolean]: !prevState[boolean]
            }
        })

    }

    booleanChecker() {
        for (let key in this.state) {
            if (this.state[key]) {
                return key;
            }
        }

    }

    flagSwitcher(boolean) {
        switch (boolean) {
            case "motivationVisible":
                return <Motivation globalUser={this.state.globalUser} isUser={this.state.isUser} onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} masterList={this.state.allPosts} />

            case "booksVisible":
                return <Books globalUser={this.state.globalUser} isUser={this.state.isUser} onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} masterList={this.state.allPosts} />

            case "thoughtVisible":
                return <Thought globalUser={this.state.globalUser} isUser={this.state.isUser} onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} masterList={this.state.allPosts} />

            case "funnyVisible":
                return <Funny globalUser={this.state.globalUser} isUser={this.state.isUser} onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} masterList={this.state.allPosts} />
            case "homeVisible":
                return <Home globalUser={this.state.globalUser} isUser={this.state.isUser} onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} onAddPost={this.addPost.bind(this)} masterList={this.state.allPosts} />

            case "userSubmitVisible":
                return <Input globalUser={this.state.globalUser} isUser={this.state.isUser} onAddPost={this.addPost.bind(this)} />

            default:
                <Container />
                break;

        }

    }

    initData() {
        var postArray = [];
        postArray.push(
            {
                quote: "They Don't Think It Be Like It Is, But It Do",
                author: "Oscar Gamble",
                username: "OG",
                category: "Motivational",
                votes: 9001,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },
            {
                quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
                author: "Mahatma Ghandi",
                username: "jhanly",
                category: "Thought-provoking",
                votes: 8655,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),

            },
            {
                quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
                author: "Martin Luther King Jr.",
                username: "evan",
                category: "Motivational",
                votes: 8556,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },
            {
                quote: "We're coming for ya globalist!",
                author: "Alex Jones",
                username: "jackAttack",
                category: "Funny",
                votes: 8223,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },
            {
                quote: "Not all those who wander are lost",
                author: "J. R. R. Tolkien",
                username: "hobbitluvr4eva",
                category: "Books/movies",
                votes: 7242,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },
            {
                quote: "NOOOOOOOOOO",
                author: "Darth Vader",
                username: "dadVader123",
                category: "Books/movies",
                votes: 7120,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },
            {
                quote: "It's OK to have all of your eggs in one basket as long as you control what happens to that basket",
                author: "Elon Musk",
                username: "eMuskFan22",
                category: "Motivational",
                votes: 6423,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            }, {
                quote: "That's what",
                author: "She Said",
                username: "Michael Scoot",
                category: "Funny",
                votes: 5431,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },

            {
                quote: "Just Do It",
                author: "Nike",
                username: "runnerGuy2",
                category: "Motivational",
                votes: 5423,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },
            {
                quote: "No u",
                author: "me",
                username: "me",
                category: "Funny",
                votes: 4561,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },


            {
                quote: "Boom! headshot!",
                author: "me",
                username: "Xx420noScopexX",
                category: "Funny",
                votes: 4323,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1)
            },
            {
                quote: "That’s just like, your opinion, man",
                author: "The Dude",
                username: "BigL432",
                category: "Books/movies",
                votes: 3241,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1),
            },
            {
                quote: "Be kind, for everyone you meet is fighting a hard battle.",
                author: "Plato",
                username: "plato_not_play_dough",
                category: "Thought-provoking",
                votes: 2334,
                hasVoted: 0,
                id: Math.floor((Math.random() * 10000) + 1)
            }

        );
        var userArray = [];
        userArray.push({
            username: "jhanly1",
            password: "password",
            id: Math.floor(Math.random() * 10000 + 1)
        },
            {
                username: "evanN",
                password: "wordpass",
                id: Math.floor(Math.random() * 10000 + 1)

            },
            {
                username: "jackAttack",
                password: "pass",
                id: Math.floor(Math.random() * 10000 + 1)

            }

        )

        this.setState({
            allPosts: postArray,
            userData: userArray,
            hasInitialized: false
        })
    }



    addPost(post) {

        if (this.state.isUser) {
            post.username = this.state.globalUser;

        }
        post.hasVoted = 0;
        post.id = Math.floor(Math.random() * 10000 + 1);
        var newArray = [...this.state.allPosts];
        newArray.push(post);
        this.setState({
            allPosts: newArray
        })

    }

    upVote(id) {


        var newArray = [...this.state.allPosts];
        var object = newArray.find(x => x.id == id);

        if (object.hasVoted <= 0) {
            object.votes++;
            object.hasVoted++;
        }
        this.setState({
            allPosts: newArray,
        })
    }

    downVote(id) {

        var newArray = [...this.state.allPosts];
        var object = newArray.find(x => x.id == id);
        if (object.hasVoted >= 0) {
            object.votes--;
            object.hasVoted--;
        }
        this.setState({
            allPosts: newArray
        })

    }

    verifyUser() {

        var user = this.state.usernameInput;
        var pass = this.state.passwordInput;
        var signedin = false;

        for (let key in this.state.userData) {

            if (this.state.userData[key].username == user && this.state.userData[key].password == pass) {
                signedin = true;
            }

        }
        if (signedin) {
            this.setState({
                globalUser: user,
                isUser: true
            })
        } else {
            this.displayError();
        }
        this.setState({
            usernameInput: "",
            passwordInput: ""
        })

    }


    displayError() {
        alert("You have entered invalid credentials. Please try again.");
    }


    render() {
        return (
            <div id="burgerdiv">
                <button type="button" disabled={this.state.isUser} className="btn btn-primary float-right" id="signinButton" data-toggle="modal" data-target="#signinModal">{this.state.globalUser}</button>
                <div className="modal fade" id="signinModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label className="col-form-label">Enter your username:</label>
                                        <input type="text" value={this.state.usernameInput} onChange={(event) => { this.setState({ usernameInput: event.target.value }) }} className="form-control" id="userInput"></input>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Enter your password:</label>
                                        <input type="password" className="form-control" value={this.state.passwordInput} onChange={(event) => { this.setState({ passwordInput: event.target.value }) }} id="passwordInput"></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button onClick={this.verifyUser.bind(this)}
                                    type="button" className="btn btn-primary" data-dismiss="modal">Sign in</button>

                            </div>
                        </div>
                    </div>
                </div>

                <Menu >
                    <li onClick={() => this.componentSwitcher("homeVisible")} id="Home" className="menu-item clicker">Home</li>
                    <li onClick={() => this.componentSwitcher("motivationVisible")} id="Motivational" className="menu-item clicker" href="/">Motivational</li>
                    <li onClick={() => this.componentSwitcher("funnyVisible")} id="Funny" className="menu-item clicker" href="/">Funny</li>
                    <li onClick={() => this.componentSwitcher("booksVisible")} id="Books" className="menu-item clicker" href="/">Books/Movies</li>
                    <li onClick={() => this.componentSwitcher("thoughtVisible")} id="Thought" className="menu-item clicker" href="/">Thought-Provoking</li>
                    <li onClick={() => this.componentSwitcher("userSubmitVisible")} id="Thought" className="menu-item clicker" href="/">Submit Your Own!</li>
                </Menu>

                <div>

                    {(this.state.hasInitialized ? this.initData() : this.flagSwitcher(this.booleanChecker()))}
                </div>
            </div>

        );
    }
}

export default Container;