import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        HashMap<Integer,String> map = new HashMap<>();

        map.put(101,"Dhana");
        map.put(102,"Rahul");
        map.put(103,"Priya");

        System.out.print("Enter Student ID: ");

        int id = sc.nextInt();

        System.out.println("Student Name: " + map.get(id));

        sc.close();
    }
}