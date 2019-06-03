import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MaterialTable from 'material-table';

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
            comments: [],

        }
    }

    handleChangeArticle(value) {
        this.setState({ text: value })
    }

    componentDidMount() {

        fetch('http://api.mupra.si/api/comments', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(content => this.setState({ comments: content.data }))


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
        const columns = [
            { title: 'Id', field: 'id' },
            { title: 'Name', field: 'name' },
            { title: 'email', field: 'email' },
            { title: 'message', field: 'message' },
            {
                title: 'Approved',
                field: 'approved',
                lookup: { 0: 'False', 1: 'True' },
            },
        ];
        return (
            <div>
                
                
                   
                <MaterialTable
                    title="Comments"
                    columns={columns}
                    data={this.state.comments}
                    editable={{
                        onRowUpdate: (newData, oldData) => {
                            var comments = this.state.comments.filter(el => el.id != newData.id)
                            comments.push(newData)
                            this.state.setState({ comments: comments })
                        }
                        ,
                        onRowDelete: oldData =>
                            console.log(oldData)
                    }}
                />
                           
            </div>
        );
    }
}



export default withStyles(addEditArticleStyle)(AddEditArticlePage);