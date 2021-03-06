//文件上传服务层
app.service("pictureService", function ($http) {
    this.uploadFile = function () {
        var formData = new FormData();
        formData.append("file", file.files[0]);
        return $http({
            method: 'POST',
            url: "../upload",
            data: formData,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        });
    }
});