package bowlblitz.exceptions

class BowlNotFoundException extends Exception {
    public BowlNotFoundException() {}

    public BowlNotFoundException(String message) {
        super(message)
    }
}
