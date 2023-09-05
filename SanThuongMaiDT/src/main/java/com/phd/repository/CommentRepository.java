/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.phd.repository;

import com.phd.pojo.Comments;
import java.util.List;

/**
 *
 * @author 84355
 */
public interface CommentRepository {
    List<Comments> getComments(int productId);
    Comments addComment(Comments c);
}
