## Problem

Zwei Ursachen:

1. **Abgeschnitten unten (Footer):** Beim Freistellen des Logos wurde eng am Motiv zugeschnitten — die Unterlänge des „y" und die Tagline liegen teilweise außerhalb bzw. am Rand. Zusätzlich wird die Vollversion im Footer nur mit `h-12` gerendert, wodurch die Tagline extrem klein und der untere Rand optisch verschluckt wird.
2. **Schlechte Lesbarkeit:** Das transparente Logo liegt direkt auf dem Mesh-/Aurora-Hintergrund. Dort wo ein farbiger Gradient hinter dem „y" liegt, verschwindet der Buchstabe im Hintergrund (kein Kontrast).

## Lösung

**1. Logo-Assets neu erzeugen**
- Beide Assets (Wortmarke und Vollversion mit Tagline) aus der Originaldatei neu freistellen, dabei:
  - transparenter Rand (Padding) von ca. 6–8 % um das Motiv, damit die Unterlänge des „y" und die Tagline nie am Bildrand kleben,
  - Zuschnitt auf den tatsächlichen Alpha-Bereich plus Padding, statt aggressivem Crop.
- Alte Asset-Pointer über die Assets-CLI ersetzen, damit keine verwaisten Dateien bleiben.

**2. Darstellung im Footer**
- Vollversion (Logo + Tagline) größer rendern (ca. `h-16` mobil, `h-20` ab `sm`), damit die Tagline lesbar ist.
- Klare, ruhige Fläche hinter dem Logo: der Mesh-Gradient im Footer wird im Logo-Bereich neutralisiert (heller, blasser Bereich bzw. Glas-Fläche mit geringer Sättigung), sodass jeder Buchstabe Kontrast bekommt.
- Kein Overflow-Clipping mehr: Logo-Container erhält eigenen Innenabstand, damit nichts an der Sektionskante abgeschnitten wird.

**3. Darstellung in der Navbar**
- Wortmarke bleibt in der Pille, aber mit etwas mehr vertikalem Luftraum (Höhe leicht reduziert bzw. Pillen-Padding erhöht), damit die Unterlänge des „y" nicht an der Pillenkante anstößt.

**4. Prüfung**
- Screenshots von Navbar (transparent + gescrollt) und Footer bei Desktop- und Mobilbreite, um zu bestätigen: nichts abgeschnitten, „y" und Tagline klar lesbar.

## Technische Details

- Neu-Freistellen per Pillow im Sandbox: Alpha-Bounding-Box ermitteln, Crop, dann symmetrisches transparentes Padding einfügen; Upload via `lovable-assets create`, alte Pointer via `lovable-assets delete`.
- Änderungen betreffen nur `src/components/Logo.tsx`, `src/components/Footer.tsx`, `src/components/Navbar.tsx` und die beiden `.asset.json`-Pointer — keine Logik-Änderungen.
