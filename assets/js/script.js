import '../../node_modules/jquery/dist/jquery.min.js';

function headerOpacity() {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', ()=>{
        if(window.scrollY >= 95) {
            header.classList.add('bg-solid')
        } else {
            header.classList.remove('bg-solid')
        }
    })
}

function filterBlogPost(blogContainerId) {
    const blogContainer = $(`#${blogContainerId}`);
    const blogTabsContainer = $(blogContainer).find('.categories');
    const blogPostsContainer = blogContainer.find('.blog-posts-container .wrapper');
    const blogPosts = blogPostsContainer.find('.single-post');

    $(blogTabsContainer).on('click', (e) => {
        const target = e.target;
        
        if($(target).hasClass('categories-tab')){
            if($(target).hasClass('active')){
                return;
            } else {
                $('.categories-tab').each((idx,el) => {
                    $(el).removeClass('active');
                })
                $(target).addClass('active');
    
                blogPostsContainer.empty();
    
                const filterCondition = $(target).attr('data-id');
                const filteredPosts = blogPosts.filter((idx,post) => {
                    return $(post).attr('data-category') === filterCondition;
                }) 
    
                const postsToAppend = filteredPosts.length > 0 ? filteredPosts : blogPosts;
                postsToAppend.appendTo(blogPostsContainer).hide().fadeIn(500);
    
            }
        }
    });
}

headerOpacity();
filterBlogPost('blog-posts-home');
