import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// OOP Concept: Abstraction and Encapsulation
abstract class Question {
    private String question;
    private String[] options;
    private int correctAnswerIndex;

    public Question(String question, String[] options, int correctAnswerIndex) {
        this.question = question;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    public String getQuestion() {
        return question;
    }

    public String[] getOptions() {
        return options;
    }

    public int getCorrectAnswerIndex() {
        return correctAnswerIndex;
    }

    // OOP Concept: Polymorphism - This method will be overridden in child classes.
    public abstract void displayOptions();

    public abstract boolean checkAnswer(int answer);
}

// OOP Concept: Inheritance
class MultipleChoiceQuestion extends Question {
    public MultipleChoiceQuestion(String question, String[] options, int correctAnswerIndex) {
        super(question, options, correctAnswerIndex);
    }

    // OOP Concept: Polymorphism - Method overriding
    @Override
    public void displayOptions() {
        for (int i = 0; i < getOptions().length; i++) {
            System.out.println((i + 1) + ". " + getOptions()[i]);
        }
    }

    // OOP Concept: Polymorphism - Method overriding
    @Override
    public boolean checkAnswer(int answer) {
        return (answer - 1) == getCorrectAnswerIndex();
    }
}

// OOP Concept: Association/Aggregation
class Quiz {
    private List<Question> questions;
    private int score;

    public Quiz() {
        questions = new ArrayList<>();
        score = 0;
    }

    // OOP Concept: Encapsulation - A method to add questions to the quiz
    public void addQuestion(Question question) {
        questions.add(question);
    }

    // OOP Concept: Polymorphism - Method overloading (accepting various types of questions)
    public void addQuestion(String question, String[] options, int correctAnswerIndex) {
        addQuestion(new MultipleChoiceQuestion(question, options, correctAnswerIndex));
    }

    // OOP Concept: Encapsulation - A method to start the quiz
    public void startQuiz() {
        Scanner scanner = new Scanner(System.in);

        for (Question question : questions) {
            System.out.println(question.getQuestion());
            question.displayOptions();

            int userAnswer = scanner.nextInt();

            if (question.checkAnswer(userAnswer)) {
                System.out.println("Correct!\n");
                score++;
            } else {
                System.out.println("Incorrect! The correct answer was: " +
                        question.getOptions()[question.getCorrectAnswerIndex()] + "\n");
            }
        }

        System.out.println("Quiz completed. Your score: " + score + "/" + questions.size());
    }

    // OOP Concept: Encapsulation - A method to get the score
    public int getScore() {
        return score;
    }
}

// OOP Concept: Encapsulation
class ScoreTracker {
    private int score;

    public ScoreTracker() {
        score = 0;
    }

    // OOP Concept: Encapsulation - A method to increment the score
    public void incrementScore() {
        score++;
    }

    // OOP Concept: Encapsulation - A method to get the score
    public int getScore() {
        return score;
    }

    public void displayScore() {
        System.out.println("Your current score: " + score);
    }
}

// OOP Concept: Polymorphism, Inheritance, Encapsulation
public class Main {
    public static void main(String[] args) {
        // Create questions and quiz
        Quiz quiz = new Quiz();
        quiz.addQuestion("What is the capital of France?",
                new String[]{"London", "Paris", "Berlin"}, 1);
        quiz.addQuestion("Which planet is known as the 'Red Planet'?",
                new String[]{"Venus", "Mars", "Jupiter"}, 2);

        // Start quiz
        quiz.startQuiz();
    }
}
