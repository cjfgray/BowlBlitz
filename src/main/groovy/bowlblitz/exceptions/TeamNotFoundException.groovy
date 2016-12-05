package bowlblitz.exceptions

class TeamNotFoundException extends Exception {
    public TeamNotFoundException() {}

    public TeamNotFoundException(String message) {
        super(message)
    }
}
