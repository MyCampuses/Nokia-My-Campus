/*
    This file contains the CSS for the authLoading page,
    centering the circle progress bar
 */

const AuthLoadingStyles = () => {

    const centered = {
        textAlign:"center",
        margin:"auto 0",
        height:"100%",
        position:"absolute",
        right:0,
        top:0,
        left:0,
        bottom:0,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    };

    return {
        centered: centered
    }
}

export default AuthLoadingStyles