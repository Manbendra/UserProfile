package com.userprofile.model;

import android.net.Uri;

public class User {
    private String name;
    private String email;
    private String phone;
    private Uri imageUri;

    public User(String name, String email, String phone, Uri imageUri){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.imageUri = imageUri;
    }
}
