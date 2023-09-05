/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.phd.service;

import java.util.List;
import com.phd.pojo.Comments;


/**
 *
 * @author 84355
 */
public interface CommentService {
    List<Comments> getComments(int productId);
    Comments addComment(Comments c);
}
