function skillsMember(){
    return {
        restric: 'E',
        templateUrl: 'views/skills-member.html',
        controller: 'skillsMemberCtrl',
        controllerAs: 'VM',
        bindToController: true,
        scoup: {
            members: '='
        }
    }
}