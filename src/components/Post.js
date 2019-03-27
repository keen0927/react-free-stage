import React from 'react';

const Post = ({match}) => {
    

    const { id } = match.params;

    return (
        <div>
            포스트 {id};
        </div>
    );
};

export default Post;