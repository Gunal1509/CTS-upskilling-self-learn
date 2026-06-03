import java.sql.*;

public class TransactionHandling {

    public static void main(String[] args) {

        try {

            Connection con =
            DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/bank",
                    "root",
                    "root");

            con.setAutoCommit(false);

            Statement st = con.createStatement();

            st.executeUpdate(
            "UPDATE accounts SET balance=balance-1000 WHERE id=1");

            st.executeUpdate(
            "UPDATE accounts SET balance=balance+1000 WHERE id=2");

            con.commit();

            System.out.println("Transfer Successful");

        } catch(Exception e) {

            System.out.println(e);
        }
    }
}