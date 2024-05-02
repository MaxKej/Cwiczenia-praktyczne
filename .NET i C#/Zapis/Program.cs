using System;
using System.IO;

public interface IZapisywalny
{
    public void ZapiszDoPliku(string sciezka);
}


public class Osoba : IZapisywalny
{
    public Osoba(string imie, string nazwisko)
    {
        Imie = imie;
        Nazwisko = nazwisko;
    }
    public string Imie { get; set; }
    public string Nazwisko { get; set; }

    public void ZapiszDoPliku(string sciezka)
    {
        using (StreamWriter writer = new StreamWriter(sciezka))
        {
            writer.WriteLine("Imię: " + Imie);
            writer.WriteLine("Nazwisko: " + Nazwisko);
        }
    }
}
public class Produkt : IZapisywalny
{

    public Produkt(string nazwa, double cena)
    {
        Nazwa = nazwa;
        Cena = cena;
    }
    public string Nazwa { get; set; }
    public double Cena { get; set; }
    public void ZapiszDoPliku(string sciezka)
    {
        using (StreamWriter writer = new StreamWriter(sciezka))
        {
            writer.WriteLine("Nazwa: " + Nazwa);
            writer.WriteLine("Cena: " + Cena);
        }
    }
}
public class Zamówienie : IZapisywalny
{

    public Zamówienie(int numer, DateTime data)
    {
        Numer = numer;
        Data = data;
    }
    public int Numer { get; set; }
    public DateTime Data { get; set; }
    public void ZapiszDoPliku(string sciezka)
    {
        using (StreamWriter writer = new StreamWriter(sciezka))
        {
            writer.WriteLine("Numer zamówienia: " + Numer);
            writer.WriteLine("Data zamówienia: " + Data);
        }
    }
}

class Program
{
    public static void Main(string[] args)
    {
        Osoba osoba = new Osoba("Jan", "Kowalski");
        Produkt produkt = new Produkt("Radio", 200);
        Zamówienie zamowienie = new Zamówienie(1, DateTime.Now);

        osoba.ZapiszDoPliku("osoby.txt");
        produkt.ZapiszDoPliku("produkty.txt");
        zamowienie.ZapiszDoPliku("zamowienia.txt");
    }
}