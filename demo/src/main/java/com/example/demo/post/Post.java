package com.example.demo.post;

public class Post {
    private long id;
    private String title;
    private String url;
    private String content;

    public Post(long id, String title, String url, String content){
        this.id = id;
        this.title = title;
        this.url = url;
        this.content = content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public String getUrl() {
        return url;
    }

    public String getTitle() {
        return title;
    }

    public long getId() {
        return id;
    }
}
