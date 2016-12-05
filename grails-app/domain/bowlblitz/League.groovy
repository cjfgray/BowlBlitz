package bowlblitz

class League {
    String name

    static hasMany = [users: User, admins: User]
}
