'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async getArticle() {
    const ctx = this.ctx;
    
    const Blog = ctx.model.Blog;
    const allBlogLists = await Blog.find();
    ctx.body = allBlogLists;
  }
  async article() {
    const ctx = this.ctx;
    const reqData = ctx.request.body;
    const Blog = ctx.model.Blog;
    const blog = new Blog({
      title: reqData.title,
      author: reqData.author,
      content: reqData.content,
    })
    await blog.save();
    ctx.body = 'ok';
  }
}

module.exports = HomeController;
