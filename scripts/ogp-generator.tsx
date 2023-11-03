import satori from "satori";
import sharp from "sharp";
import fs from "fs";

export const generateOgp = async (
  options: { title: string; url: string }[],
) => {
  for (const option of options) {
    const png = await generateOgpImage(option.title);
    fs.writeFileSync(`public/images/${option.url}.png`, png);
  }
};

const generateOgpImage = async (title: string) => {
  // フォントデータを読み込む
  const regular = fs.readFileSync("public/fonts/NotoSansJP-Regular.otf");
  const medium = fs.readFileSync("public/fonts/NotoSansJP-Medium.otf");
  // JSX から画像を生成する
  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundImage: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
        color: "#fff",
        fontSize: 48,
        fontWeight: 600,
        justifyContent: "center",
        alignItems: "center",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem 4rem",
          backgroundColor: "#282b2f",
          justifyContent: "space-between",
          borderRadius: "1rem",
          height: "90%",
          width: "100%",
        }}
      >
        <p style={{ fontSize: 64, fontWeight: 700, whiteSpace: "pre-wrap" }}>
          {title}
        </p>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://avatars.githubusercontent.com/wattanx"
            width={80}
            height={80}
            style={{ borderRadius: "100%" }}
          />
          <p style={{ marginLeft: "16px", fontWeight: 400 }}>wattanx</p>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans JP",
          data: regular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Noto Sans JP",
          data: medium,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );

  // SVG から PNG 形式に変換する
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return png;
};
