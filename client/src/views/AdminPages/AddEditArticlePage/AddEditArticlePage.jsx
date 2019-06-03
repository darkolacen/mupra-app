import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import { withRouter } from 'react-router-dom'
//Editor
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//Style
import addEditArticleStyle from "assets/jss/material-kit-react/views/adminPage/addEditArticlePage.jsx";

import image from "assets/img/bg7.jpg";
const dashboardRoutes = [];

class AddEditArticlePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            articleId: null,
            title: '',
            category: '',
            allArticles: [],
        }
    }

    handleChangeArticle(value) {
        this.setState({ text: value })
    }
    handleNewArticle() {
        this.setState({ text: '', articleId: null, category: '', title: '' })
    }
    handleChange(event) {
        if (!event.target.type && event.target.value != '' && event.target.name == 'title') {
            let article = this.state.allArticles.find(el => el.title == event.target.value)
            this.setState({ text: article.content, articleId: article.id, category: article.category })
        }
        this.setState({ [event.target.name]: event.target.value })
    }
    componentDidMount() {

        fetch('http://api.mupra.si/api/articles', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(content => this.setState({ allArticles: content.data }))


    }
    handleSubmit() {
        let article = {
            article_id: this.state.articleId,
            title: this.state.title,
            content: this.state.text,
            category: this.state.category,
        };
        let token = 'Bearer ' + localStorage.getItem('token');
        fetch('http://api.mupra.si/api/articles', {
            method: this.state.articleId != null ? 'PUT' : 'POST',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(res => res.json())
            .then(response => alert('Success'))
            .catch(error => console.error('Error:', error));

        this.setState({ message: '', name: '', email: '', sendSuccess: true })
    }
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>

                <Button onClick={() => this.handleNewArticle()} color="primary" style={{ marginLeft: "30px" }}>New article</Button>
                <br/>
                <CustomInput
                    id="regular"
                    
                    inputProps={{
                        name: "title",
                        value: this.state.title,
                        onChange: this.handleChange.bind(this),
                    }}
                    formControlProps={{
                        fullWidth: false,
                    }}
                />
                <br/>


                Title:
                <Select
                    value={this.state.title}
                    onChange={this.handleChange.bind(this)}
                    inputProps={{
                        name: 'title'

                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {this.state.allArticles.map(article =>
                        <MenuItem value={article.title} key={article.id}>{article.title}</MenuItem>
                    )}

                </Select>

                Category:
                <Select
                    value={this.state.category}
                    onChange={this.handleChange.bind(this)}
                    inputProps={{
                        name: 'category'

                    }}
                >
                    <MenuItem value="inziniring">
                        <em>Gradbeni inziniring</em>
                    </MenuItem>
                    <MenuItem value="racunalnistvo">
                        <em>Racunalnistvo</em>
                    </MenuItem>
                    <MenuItem value="draft">
                        <em>Draft</em>
                    </MenuItem>

                </Select>
                <Button onClick={() => this.handleSubmit()} color="primary" style={{ marginLeft: "30px" }}>Save</Button>



                <ReactQuill
                    value={this.state.text}
                    onChange={this.handleChangeArticle.bind(this)}
                />



            </div>
        );
    }
}



export default withStyles(addEditArticleStyle)(AddEditArticlePage);