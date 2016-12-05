package bowlblitz.exceptions

class SeasonNotFoundException extends Exception {
    public SeasonNotFoundException() {}

    public SeasonNotFoundException(String message) {
        super(message)
    }
}
