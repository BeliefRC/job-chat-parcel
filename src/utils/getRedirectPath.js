/**
 *  获取需要跳转的地址
 * @param type
 * @param avatar
 * @returns {string}
 */
export default function getRedirectPath (type, avatar) {
    // 根据用户的信息，返回跳转的地址
    let url = (type === 'boss') ? '/boss' : '/genius'
    //未完善个人信息
    if (!avatar) {
        url += 'Info'
    }
    return url
}



