const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot39n99/",
            name: "springboot39n99",
            // 退出到首页链接
            indexUrl: ''
        };
    },
    getProjectName(){
        return {
            projectName: "在线考试"
        } 
    }
}
export default base
